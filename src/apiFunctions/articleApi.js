export const getArticles = async () => {
  try {
    let response = await fetch(`http://localhost:4000/articles/`);
    if (response.ok) {
      let data = await response.json();
      return data.articles;
    } else {
      let error = await response.json();
      return error;
    }
  } catch (error) {
    return error;
  }
};

export const getArticleById = async (articleId) => {
  try {
    let response = await fetch(`http://localhost:4000/articles/${articleId}`);
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

export const postArticle = async (article) => {
  try {
    let response = await fetch(`http://localhost:4000/articles/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
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

export const updateArticle = async (article, articleId) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let response = await fetch(`http://localhost:4000/articles/${articleId}`, {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(article),
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

export const deleteArticle = async (articleId) => {
  try {
    let response = await fetch(`http://localhost:4000/articles/${articleId}`, {
      method: "DELETE",
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
