import * as React from 'react';

/**
 * Вернет тип, соответствующий нативным свойствам указанного элемента.
 *
 * Пример:
 *
 *     type NativeButtonProps = NativeProps<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>;
 */
type NativeProps<T, N> = React.DetailedHTMLProps<N, T>;

/**
 * Дополнительные параметры компонентов
 * */
interface AdditionalProps {
  as?: React.ElementType;
}


export type MergedNativeProps<
  HTMLNativeElement,
  OwnProps,
  Attrs = React.HTMLAttributes<HTMLNativeElement>
> = OwnProps &
  AdditionalProps &
  Pick<
    NativeProps<HTMLNativeElement, Attrs>,
    Exclude<keyof NativeProps<HTMLNativeElement, Attrs>, keyof OwnProps>
  >;
