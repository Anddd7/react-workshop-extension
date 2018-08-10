export const GET_START = 'GET_START';
export const GET_END = 'GET_END';
export function getStart () {
  return { type: GET_START };
}
export function getEnd () {
  return { type: GET_END };
}

export const GET_TOP10_PUBLISHED_RECORD = 'GET_TOP10_PUBLISHED_RECORD';

export function getCalculatedPublishedRecord (top10PublishedRecord) {
  return { type: GET_TOP10_PUBLISHED_RECORD, top10PublishedRecord };
}