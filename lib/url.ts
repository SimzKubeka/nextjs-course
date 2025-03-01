/**
 * URL Query Utilities
 *
 * Purpose:
 * - Provides utility functions to modify and manage URL query parameters dynamically.
 *
 * Functionality:
 * - `formUrlQuery` updates or adds a query parameter to the URL.
 * - `removeKeysFromUrlQuery` removes specified query parameters from the URL.
 *
 * Features:
 * - Uses `query-string` (`qs`) for parsing and stringifying URL query parameters.
 * - Supports updating and removing multiple query parameters dynamically.
 * - Ensures URL integrity by preserving other query parameters.
 *
 * Usage:
 * - Use `formUrlQuery({ params, key, value })` to add or update a query parameter.
 * - Use `removeKeysFromUrlQuery({ params, keysToRemove })` to remove specific keys from the URL.
 *
 * Styling & Responsiveness:
 * - Functions are designed to be reusable and efficient in managing dynamic URLs.
 */

import qs from "query-string";

interface UrlQueryParams {
  params: string; 
  key: string; 
  value: string; 
}


interface RemoveUrlQueryParams {
  params: string; 
  keysToRemove: string[]; 
}

/**
 * formUrlQuery
 * - Adds or updates a query parameter in the URL.
 *
 * @param {UrlQueryParams} params - Object containing the query string, key, and new value.
 * @returns {string} - The updated URL with the modified query parameter.
 */
export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const queryString = qs.parse(params); 
  queryString[key] = value; 

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

/**
 * removeKeysFromUrlQuery
 * - Removes specified keys from the URL query parameters.
 *
 * @param {RemoveUrlQueryParams} params - Object containing the query string and keys to remove.
 * @returns {string} - The updated URL with the specified keys removed.
 */
export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const queryString = qs.parse(params); 

  keysToRemove.forEach((key) => {
    delete queryString[key]; 
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: queryString,
    },
    { skipNull: true }
  );
};
