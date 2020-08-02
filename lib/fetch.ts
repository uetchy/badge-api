import fetch, { RequestInit } from 'node-fetch';
import { JSDOM } from 'jsdom';

export async function json(url: string, init?: RequestInit) {
  return await fetch(url, init).then((res) => res.json());
}

export async function text(url: string, init?: RequestInit) {
  return await fetch(url, init).then((res) => res.text());
}

export async function html(url: string, init?: RequestInit) {
  const bodyString = await fetch(url, init).then((res) => res.text());
  const dom = new JSDOM(bodyString);
  return dom;
}
