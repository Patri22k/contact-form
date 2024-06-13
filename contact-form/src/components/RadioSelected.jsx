import React from "react";

const RadioSelected = ({ selectedRadio, setSelectedRadio, radioError, setRadioError }) => {
    const handleRadioChanged = (radioId) => {
        setSelectedRadio(radioId);
        setRadioError('');
    };

    const handleRadioBlur = () => {
        if (!radioError) {
            setRadioError('Please select a query type');
        } else {
            setRadioError('');
        }
    };

    return (
        <div className='flex flex-col xl:flex-row gap-5'>
            <div 
                className="border-2 rounded-md flex items-center h-10 xl:w-1/2 px-5 hover:border-[#0C7D69]"
                style={{ 
                    borderColor: selectedRadio === "radio1" ? 'hsl(169, 82%, 27%)' : '', 
                    backgroundColor: selectedRadio === "radio1" ? 'hsl(148, 38%, 91%)' : ''
                }}
            >
                <input
                    type="radio"
                    name="radio"
                    id="radio1"
                    className='accent-white'
                    checked={selectedRadio === "radio1"}
                    onChange={() => handleRadioChanged("radio1")}
                    onBlur={handleRadioBlur}
                    style={{ display: 'none' }}
                />
                <label htmlFor="radio1" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', width: '100%' }}>
                    {selectedRadio === "radio1" ? (
                        <svg viewBox="0 0 21 21" width="21" height="21">
                            <path fill="#0C7D69" d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z" />
                        </svg>
                    ) : (
                        <span
                            style={{
                                display: 'inline-block',
                                width: '18px',
                                height: '18px',
                                border: '1px solid #000',
                                borderRadius: '100%'
                            }}
                        />
                    )}
                    <p className='ml-3'>General Enquiry</p>
                </label>
            </div>
            <div 
                className="border-2 rounded-md flex items-center h-10 xl:w-1/2 px-5 hover:border-[#0C7D69]"
                style={{
                    borderColor: selectedRadio === "radio2" ? 'hsl(169, 82%, 27%)' : '',
                    backgroundColor: selectedRadio === "radio2" ? 'hsl(148, 38%, 91%)' : ''
                }}
            >
                <input
                    type="radio"
                    name="radio"
                    id="radio2"
                    className='accent-white'
                    checked={selectedRadio === "radio2"}
                    onChange={() => handleRadioChanged("radio2")}
                    onBlur={handleRadioBlur}
                    style={{ display: 'none' }}
                />
                <label htmlFor="radio2" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', width: '100%' }}>
                    {selectedRadio === "radio2" ? (
                        <svg viewBox="0 0 21 21" width="21" height="21">
                            <path fill="#0C7D69" d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z" />
                        </svg>
                    ) : (
                        <span
                            style={{
                                display: 'inline-block',
                                width: '18px',
                                height: '18px',
                                border: '1px solid #000',
                                borderRadius: '100%'
                            }}
                        />
                    )}
                    <p className="ml-3">Support Request</p>
                </label>
            </div>
        </div>
    );
};

export default RadioSelected;