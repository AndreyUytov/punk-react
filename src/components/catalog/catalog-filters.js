import React from 'react'

const Filter = () => {
  return (
    <div className='catalog-filters'>
      <h3 className='filter-title'>
        Sorting:
      </h3>
      <form className='filter-form'>
        <fieldset>
          <label>
            Choose max ABV
          </label>
          <div className="range-controls">
            <div className="scale">
              <div className="bar"></div>
            </div>
            <div className="toggle"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23"><path opacity=".3" fill="#ABABAB" d="M10 20C4.477 20 0 15.522 0 10v2c0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-2c0 5.522-4.478 10-10 10z"/><circle fill="#FFF" cx="10" cy="10" r="10"/><circle fill="#ABABAB" cx="10" cy="10" r="2"/></svg></div>
          </div>
          <div className="controls-input-wrapper">
              <label className="controls-input-label">
                <input type="text" name="min-price" value="45" min="0" max="29900" />
              </label>
            </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Filter