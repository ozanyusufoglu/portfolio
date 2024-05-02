import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* 

If your tailwind classname string became The Great Wall, it's better to split it into different lines
with some semantic comments over them but you can't do it in tailwind by default bcs of some shortcomings

👇 This function solves 2 shortcomings of tailwind by combining two utility clsx and tw-merge
   
- tw-merge let you easily merge different classname strings in JS together by resolving conflicts if any exists,
but you can't use objects 
- clsx lets you easily use conditional classnames  but also enabling object usage https://github.com/lukeed/clsx
- therefore you need clsx, which enables passing classname objects into twMerge function 
- Here we combine these two utility to be able to reuse in each situation you want to design your tailwind 
   classname string 🙌 
   
Ozan 
*/
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
