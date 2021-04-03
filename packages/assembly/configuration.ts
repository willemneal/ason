/// <reference path="./index.d.ts" />

export const ASON_EFFECTIVE_INITIAL_DATA_SEGMENT_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_DATA_SEGMENT_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_DATA_SEGMENT_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_ARRAY_DATA_SEGMENT_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_ARRAY_DATA_SEGMENT_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_ARRAY_DATA_SEGMENT_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_LINK_SEGMENT_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_LINK_SEGMENT_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_LINK_SEGMENT_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;

export const ASON_EFFECTIVE_INITIAL_REFERENCE_SEGMENT_TABLE_LENGTH: usize =
  isDefined(ASON_INITIAL_REFERENCE_SEGMENT_TABLE_LENGTH)
    ? <usize>ASON_INITIAL_REFERENCE_SEGMENT_TABLE_LENGTH
    : <usize>u16.MAX_VALUE;