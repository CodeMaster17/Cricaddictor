import { TossResultType } from "@/lib/types";

export const USER_TEAM = "USER_TEAM";
export const OPPONENT_TEAM = "OPPONENT_TEAM";

// Events

export const tossEvents: Record<TossResultType, TossResultType> = {
  EVENT_TOSS_WIN: "EVENT_TOSS_WIN",
  EVENT_TOSS_LOSS: "EVENT_TOSS_LOSS",
  "":""
};

export const COIN_SIDE_TAILS = "TAILS";
export const COIN_SIDE_HEADS = "HEADS";
