import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import SendButton from '../sendButton/SendButton';
import css from './BookingForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  bookingDate: Yup.date()
    .min(new Date(), 'Booking date cannot be in the past')
    .required('Required'),
  comment: Yup.string(),
});

const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    alert('You have successfully booked a camp!');
  };

  return (
    <div className={css.sectionFormContainer}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.formDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={css.formContainer}>
            <Field
              id={nanoid()}
              name="name"
              placeholder="Name"
              className={css.inputField}
            />
            <ErrorMessage name="name" component="div" className={css.error} />

            <Field
              id={nanoid()}
              name="email"
              type="email"
              placeholder="Email"
              className={css.inputField}
            />
            <ErrorMessage name="email" component="div" className={css.error} />

            <div className={css.datePickerContainer}>
              <Field
                id={nanoid()}
                name="bookingDate"
                type="date"
                className={css.inputField}
                onChange={e => setFieldValue('bookingDate', e.target.value)}
              />
            </div>
            <ErrorMessage
              name="bookingDate"
              component="div"
              className={css.error}
            />

            <Field
              id={nanoid()}
              name="comment"
              as="textarea"
              placeholder="Comment"
              className={css.textArea}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={css.error}
            />

            <SendButton />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
