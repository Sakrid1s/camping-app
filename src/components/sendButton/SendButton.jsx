import css from './SendButton.module.css';

const SendButton = () => {
  return (
    <button type="submit" className={css.sendButton}>
      Send
    </button>
  );
};

export default SendButton;
