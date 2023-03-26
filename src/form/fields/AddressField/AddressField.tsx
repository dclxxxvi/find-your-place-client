import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { notification, Select, type SelectProps } from 'antd';
import { type ReactNode, useCallback, useState } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';
import { useYMaps } from '@pbe/react-yandex-maps';
import { EHttpStatus } from '../../../types/EHttpStatus';

type ExcludedProps = keyof ControllerRenderProps | 'status';

interface OptionType {
	value: string;
	label: string;
}

interface Props extends Omit<SelectProps<string, OptionType>, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const mapSuggestDataToOptions = (data: ymaps.ISuggestResult[]) => {
	return data.map(suggest => ({
		label: suggest.displayName,
		value: suggest.value,
	}));
};

const AddressField: React.FC<Props> = ({ name, label, control, ...rest }) => {
	const ymaps = useYMaps(['suggest']);

	const [fetchSuggestsLoadingState, setFetchSuggestsLoadingState] = useState<EHttpStatus>(EHttpStatus.IDLE);

	const [searchValue, setSearchValue] = useState('');

	// TODO: прикрутить debounce, cancelToken и отрефакторить
	const fetchSuggests = useCallback(() => {
		setFetchSuggestsLoadingState(EHttpStatus.LOADING);
		if ((ymaps?.suggest) != null) {
			ymaps.suggest(searchValue)
				?.then(data => {
					setOptions(mapSuggestDataToOptions(data));
					setFetchSuggestsLoadingState(EHttpStatus.SUCCESS);
				})
				?.catch(() => {
					notification.error({
						message: 'Произошла ошибка',
						description: 'При получении списка предложенных адресов произошла ошибка...',
					});
					setFetchSuggestsLoadingState(EHttpStatus.ERROR);
				});
		}
	}, [ymaps, searchValue]);

	const handleSearchValueChange = useCallback((value: string) => {
		setSearchValue(value);
		fetchSuggests();
	}, [fetchSuggests]);

	const [options, setOptions] = useState<OptionType[]>([]);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<Select
						options={options}
						status={fieldState.invalid ? 'error' : ''}
						loading={fetchSuggestsLoadingState === EHttpStatus.LOADING}
						showSearch
						onSearch={handleSearchValueChange}
						{...field}
						{...rest}
					/>
					<ErrorMessage fieldState={fieldState} />
				</FieldWrapper>
			)}
		/>
	);
};

export default React.memo(AddressField);
