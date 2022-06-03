import * as React from "react";
import tw from "twin.macro";

const Border = tw.span`bg-slate-50 z-10 absolute opacity-50`;
const HorizontalBorder = tw(Border)`w-full h-px left-0`;
const VerticalBorder = tw(Border)`h-full w-px top-0`;
const LeftBorder = tw(VerticalBorder)`left-0`;
const TopBorder = tw(HorizontalBorder)`top-0`;
const RightBorder = tw(VerticalBorder)`right-0`;
const BottomBorder = tw(HorizontalBorder)`bottom-0`;
/**
 * Inspired by https://www.wizardingworld.com
 */
export const AnimatedBorder = () => <div tw="m-[10px] absolute w-[calc(100% - 20px)] h-[calc(100% - 20px)] box-border">
  <LeftBorder />
  <TopBorder />
  <RightBorder />
  <BottomBorder />
</div>;