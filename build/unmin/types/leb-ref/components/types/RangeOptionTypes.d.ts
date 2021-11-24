import * as Interfaces from '../interfaces';
declare type AnyRangeOptionsT = Interfaces.IAnyRangeOptions;
declare type CharRangeOptionsT = Interfaces.ICharRangeOptions;
declare type ColorRangeOptionsT = Interfaces.IColorRangeOptions;
declare type DateRangeOptionsT = Interfaces.IDateRangeOptions;
declare type NumberRangeOptionsT = Interfaces.INumberRangeOptions;
declare type RangeOptionsT<EdgeT, ItemT, DateT = EdgeT> = Interfaces.IRangeOptions<EdgeT, ItemT, DateT>;
declare type StringRangeOptionsT = Interfaces.IStringRangeOptions;
declare type MergeRangeOptionsT = Interfaces.IMergeRangeOptions;
declare type ZipRangeOptionsT = Interfaces.IZipRangeOptions;
declare type OptionsType<T> = T extends RangeOptionsT<infer EdgeT, infer ItemT, infer DateT> ? T : never;
declare type OptionsEdgeType<T> = T extends RangeOptionsT<infer EdgeT, infer ItemT, infer DateT> ? EdgeT : never;
declare type OptionsItemType<T> = T extends RangeOptionsT<infer EdgeT, infer ItemT, infer DateT> ? ItemT : never;
declare type OptionsDateType<T> = T extends RangeOptionsT<infer EdgeT, infer ItemT, infer DateT> ? DateT : never;
export { AnyRangeOptionsT, OptionsType, OptionsItemType, OptionsEdgeType, OptionsDateType, CharRangeOptionsT, ColorRangeOptionsT, DateRangeOptionsT, NumberRangeOptionsT, RangeOptionsT, StringRangeOptionsT, MergeRangeOptionsT, ZipRangeOptionsT, };
