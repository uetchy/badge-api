import "cross-fetch/polyfill";
import { GraphQLClient } from "graphql-request";
import { PatchedRequestInit } from "graphql-request/dist/types";
import { JSDOM } from "jsdom";

export async function graphql(
  url: string,
  query: string,
  init?: PatchedRequestInit
) {
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
