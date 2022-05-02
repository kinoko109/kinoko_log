/**
 * 記事コンテンツのスタイリング
 */
export const articleStyle = `
  @media (min-width: 769px) {
    p,
    li {
      font-size: 18px;
      font-weight: 400;
      line-height: 2;
    }
    > h2 {
      margin-top: 70px;
    }
    > h3 {
      margin-top: 50px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
      font-weight: 400;
      line-height: 1.6;
    }
    > h2 {
      margin-top: 40px;
    }
    p,
    li {
      font-size: 17px;
      line-height: 1.8;
    }
  }
`;
