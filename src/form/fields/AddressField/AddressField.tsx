import * as React from 'react';
import { Controller, type ControllerRenderProps } from 'react-hook-form';
import { AutoComplete, type AutoCompleteProps, notification } from 'antd';
import { type ReactNode, useCallback, useState } from 'react';
import Label from '../../components/Label';
import FieldWrapper from '../../components/FieldWrapper';
import ErrorMessage from '../../components/ErrorMessage';
import { useYMaps } from '@pbe/react-yandex-maps';
import { mapSuggestDataToOptions } from './consts';

type ExcludedProps = keyof ControllerRenderProps | 'status';

interface OptionType {
	value: string;
	label: string;
}

interface Props extends Omit<AutoCompleteProps<string, OptionType>, ExcludedProps> {
	name: string;
	control: any; // TODO: поправить
	label?: ReactNode;
}

const AddressField: React.FC<Props> = ({ name, label, control, ...rest }) => {
	const ymaps = useYMaps(['suggest']);

	const [searchValue, setSearchValue] = useState('');
	const [options, setOptions] = useState<OptionType[]>([]);

	// TODO: прикрутить debounce, cancelToken и отрефакторить
	const fetchSuggests = useCallback(() => {
		if (!ymaps?.suggest) {
			return;
		}
		ymaps.suggest(searchValue, { results: 10 })
			.then(data => setOptions(mapSuggestDataToOptions(data)))
			.catch(() => notification.error({
				message: 'Произошла ошибка',
				description: 'При получении списка предложенных адресов произошла ошибка...',
			}));
	}, [ymaps, searchValue]);

	const handleSearchValueChange = useCallback((value: string) => {
		setSearchValue(value);
		fetchSuggests();
	}, [fetchSuggests]);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState }) => (
				<FieldWrapper>
					<Label label={label} />
					<AutoComplete
						options={options}
						status={fieldState.invalid ? 'error' : ''}
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
