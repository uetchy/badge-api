import fetch, { RequestInit } from 'node-fetch';
export async function json(targetURL: string, init?: RequestInit) {
  return await fetch(targetURL, init).then((res) => res.text());
}
