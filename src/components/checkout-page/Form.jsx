import React from "react";
import useInputs from "../../hooks/use-inputs";

import amexPic from "../../assets/images/amex.svg";
import paypalPic from "../../assets/images/paypal.svg";
import visaPic from "../../assets/images/visa.svg";

import styles from "./Form.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const ccIsValid = (value) => value.length === 9;

function Form(props) {
  const {
    value: enteredCCNumber,
    isValid: enteredCCNumberisValid,
    hasError: enteredCCNumberHasError,
    valueChangeHandler: ccNumberChangeHandler,
    inputBlurHandler: ccNumberBlurHandler,
    reset: resetCCNumberInput,
  } = useInputs(ccIsValid);

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInputs(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInputs(isNotEmpty);

  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: enteredAddressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInputs(isNotEmpty);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: enteredCityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInputs(isNotEmpty);

  const {
    value: enteredZipNumber,
    isValid: enteredZipNumberIsValid,
    hasError: enteredZipNumberHasError,
    valueChangeHandler: zipNumberChangeHandler,
    inputBlurHandler: zipNumberBlurHandler,
    reset: resetZipNumberInput,
  } = useInputs(isNotEmpty);

  let formIsValid = false;

  if (
    enteredCCNumberisValid &&
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredAddressIsValid &&
    enteredAddressIsValid &&
    enteredCityIsValid &&
    enteredZipNumberIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;
    console.log(
      JSON.stringify({
        CCNumber: enteredCCNumber,
        FirstName: enteredFirstName,
        LastName: enteredLastName,
        Address: enteredAddress,
        ZipNumber: enteredZipNumber,
        City: enteredCity,
      })
    );
    resetCCNumberInput();
    resetFirstNameInput();
    resetLastNameInput();
    resetAddressInput();
    resetCityInput();
    resetZipNumberInput();
  };

  return (
    <>
      <div className={styles.info}>
        <form className={styles.payement} onSubmit={submitHandler}>
          <div className={styles.ccInfo}>
            <label htmlFor="ccNumber">Credit or Debit Card Information</label>
            <input
              type="number"
              id="ccNumber"
              onChange={ccNumberChangeHandler}
              onBlur={ccNumberBlurHandler}
              value={enteredCCNumber}
              required
            />

            <div className={styles.ccImgs}>
              <span>
                <img src={amexPic} alt="amex card" className={styles.ccImg} />
              </span>
              <span>
                <img src={visaPic} alt="amex card" className={styles.ccImg} />
              </span>
              <span>
                <img src={paypalPic} alt="amex card" className={styles.ccImg} />
              </span>
            </div>
            {enteredCCNumberHasError && (
              <p className={styles.errorMsg}>
                &#9888; Credit Card Number is not valid!
              </p>
            )}
          </div>
          <div className={styles.bilingInfo}>
            <h4>Billing Address</h4>

            <div className={styles.names}>
              <div>
                <label htmlFor="firstName" className={styles.label}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                  value={enteredFirstName}
                />
                {enteredFirstNameHasError && (
                  <p className={styles.errorMsg}>
                    &#9888; Please enter a first name!
                  </p>
                )}
              </div>
              <div className={styles.scnd}>
                <label htmlFor="lastName" className={styles.label}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                  value={enteredLastName}
                />
                {enteredLastNameHasError && (
                  <p className={styles.errorMsg}>
                    &#9888; Please enter a last name!
                  </p>
                )}
              </div>
            </div>

            <div className={styles.address}>
              <label htmlFor="address" className={styles.label}>
                Address
              </label>
              <input
                type="text"
                id="address"
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
                value={enteredAddress}
              />
              {enteredAddressHasError && (
                <p className={styles.errorMsg}>
                  &#9888; Please enter a valid address!
                </p>
              )}
            </div>
            <div className={styles.cityAddress}>
              <div>
                <label htmlFor="cityName" className={styles.label}>
                  City
                </label>
                <input
                  type="text"
                  id="cityName"
                  onChange={cityChangeHandler}
                  onBlur={cityBlurHandler}
                  value={enteredCity}
                />
                {enteredCityHasError && (
                  <p className={styles.errorMsg}>
                    &#9888; Please enter a city name!
                  </p>
                )}
              </div>
              <div className={styles.scnd}>
                <label htmlFor="code" className={styles.label}>
                  Zip Code
                </label>
                <input
                  type="number"
                  onChange={zipNumberChangeHandler}
                  onBlur={zipNumberBlurHandler}
                  value={enteredZipNumber}
                />
                {enteredZipNumberHasError && (
                  <p className={styles.errorMsg}>
                    &#9888; Please enter a zip number!
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.btn}>
            <button className={styles.orderBtn}>Confirm Order</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
