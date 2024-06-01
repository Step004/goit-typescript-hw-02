interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return <button onClick={handleLoadMore}>Load more articles</button>;
};

export default LoadMoreBtn;
