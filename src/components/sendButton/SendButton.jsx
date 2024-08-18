import css from './SendButton.module.css';

const SendButton = () => {
  return (
    <button className={css.sendButton} type="submit">
      Send
    </button>
  );
};

export default SendButton;
