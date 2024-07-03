import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=id&apiKey=64ba83de889d459e87df3521ea73f776"
        );
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news articles:", error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <p>Loading news...</p>;
  }

  return (
    <Container>
      <div>
        <center><h1>Berita Terbaru</h1></center>
      </div>
      <Row>
        {articles.map((article, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              {article.urlToImage ? (
                <Card.Img variant="top" src={article.urlToImage} />
              ) : (
                <div className="text-center py-3">
                  <i></i>
                </div>
              )}
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button variant="dark" href={article.url} target="_blank">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default News;
