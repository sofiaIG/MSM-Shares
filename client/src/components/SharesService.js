const baseURL = "http://127.0.0.1:9000/api/shares/";

export const getShares = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postShares = (payload) => {
  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

export const deleteShares = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
