declare module '*.scss' {
	const css: Record<string, string>;
	export default css;
}
declare module '*.sass' {
	const css: Record<string, string>;
	export default css;
}
declare module '*.css' {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}
declare module 'react-markup';
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
