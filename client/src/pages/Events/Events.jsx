import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import moment from "moment";
import styles from '../../pages/Events/Events.module.sass';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Timer from "../../components/Events/Timer";
import CONSTANTS from '../../constants';

function Events () {
  const [events, setEvents] = useState(() => {
    return JSON.parse(localStorage.getItem("events") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const deleteEvent = (id) => {
    setEvents(events.filter(ev => ev.id !== id));
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Enter event's name"),
    date: Yup.date()
      .required("Enter date and time")
      .test("future-date", "Date must be in the future", (value) => {
        return moment(value).isAfter(moment());
      }),
    notifyBefore: Yup.number()
      .min(0, "Must be 0 or more")
      .required("Enter minutes"),
  });

  return (
    <>
    <Header />
    <div className={styles.container}>
      <div className={styles.form}> 
        <h1>We will help you not to forget - we will remind you in time!</h1>
        <Formik initialValues={{ name: "", date: "", notifyBefore: 0}}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  const newEvent = {
                    id: Date.now(),
                    name: values.name,
                    date: values.date,
                    notifyBefore: Number(values.notifyBefore),
                    createdAt: Date.now(),
                  };

                  setEvents((prev) =>
                  [...prev, newEvent].sort(
                    (a, b) => moment(a.date).valueOf() - moment(b.date).valueOf()
                  ));
                  resetForm();
                }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form2}>
              <div className={styles.formRow}>
                <Field type="text" name="name" placeholder="Event's name" />
                <ErrorMessage name="name" component="div" />
                <Field type="datetime-local" name="date" />
                <ErrorMessage name="date" component="div" />
                <Field type="number" name="notifyBefore" placeholder="Report in (min)" />
                <ErrorMessage name="notifyBefore" component="div" />
              </div>
              <button className={styles.buttonForm} type="submit" disabled={isSubmitting}>
                Add Event</button>
            </Form>
          )}
        </Formik>
        <div className={styles.boxEvents}>
          <div className={styles.boxHeader}>
            <h2>Live upcoming checks</h2>
            <h4>Remaining time</h4>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}timer_icon.svg`} alt="timer" />
          </div>
          <div className={styles.eventsList}>
            {events.map((ev) => (
                <Timer key={ev.id} event={ev} onDelete={deleteEvent} />
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
    
}

export default Events;
