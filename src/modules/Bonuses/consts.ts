import { type IBonusCondition } from './types';

export const BONUS_CONDITIONS: IBonusCondition[] = [
	{ icon: 'percent', title: 'до 30%', description: 'Скидка на оплату' },
	{ icon: 'balance', title: '1Б = 1₽', description: '1 бонус равен 1 рублю' },
	{ icon: 'currency_exchange', title: '+ ₽', description: 'Кешбек при оплате' },
	{ icon: 'redeem', title: 'Для вас', description: 'Индивидуальные предложения' },
	{ icon: 'account_balance_wallet', title: 'до 500', description: 'Бонусов при добавлении пространства' },
];
