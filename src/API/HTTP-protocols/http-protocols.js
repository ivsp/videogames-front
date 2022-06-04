export async function registerNewUser(body) {
  await fetch(`http://localhost:4000/auth/register`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function validateNewUser(token) {
  const r = await fetch(`http://localhost:4000/auth/validate?token=${token}`);
  return r;
}

export async function logInUser(body) {
  const r = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${body.email}:${body.password}`,
    },
  });
  if (r.status !== 201) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function getUserData(token) {
  const r = await fetch(`http://localhost:4000/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 401) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}

export async function getAllGames() {
  const r = await fetch("http://localhost:4000/api/games");

  if (r.status === 404) return r;
  else {
    const data = await r.json();
    return data;
  }
}

export async function createNewGame(body, token, email) {
  const r = await fetch(`http://localhost:4000/api/games?email=${email}`, {
    method: "POST",
    body: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (r.status === 409) {
    return r;
  } else {
    const data = await r.json();
    return data;
  }
}
