import "cross-fetch/polyfill";
import { JSDOM } from "jsdom";
import { GraphQLClient } from "graphql-request";

export async function graphql(url: string, query: string, init?: RequestInit) {
  const graphQLClient = new GraphQLClient(url, init);
  return await graphQLClient.request(query);
}

export async function json(url: string, init?: RequestInit) {
  return await fetch(url, init).then((res) => res.json());
}

export async function text(url: string, init?: RequestInit) {
  return await fetch(url, init).then((res) => res.text());
}

export async function html(url: string, init?: RequestInit) {
  const bodyString = await text(url, init);
  return new JSDOM(bodyString);
}
