export const getReviews = async (reviewId) => {
  try {
    let response = await fetch(
      `http://localhost:4000/articles/${reviewId}/reviews`
    );
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};

export const postReview = async (review, articleId) => {
  try {
    let response = await fetch(`http://localhost:4000/articles/${articleId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    });
    if (response.ok) {
      return await response.json();
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};

export const deleteReview = async (articleId, reviewId) => {
  try {
    let response = await fetch(
      `http://localhost:4000/articles/${articleId}/reviews/${reviewId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};

export const addClap = async (articleId, user) => {
  try {
    let response = await fetch(
      `http://localhost:4000/articles/${articleId}/clap`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};

export const removeClap = async (articleId, user) => {
  try {
    let response = await fetch(
      `http://localhost:4000/articles/${articleId}/removeClap`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};

export const getNumberOfClaps = async (articleId) => {
  try {
    let response = await fetch(
      `http://localhost:4000/articles/${articleId}/calculateClap`
    );
    if (response.ok) {
      let data = await response.json();
      return data;
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};
