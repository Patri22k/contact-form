import React from 'react';

const CheckboxWithSVG = ({ isChecked, setIsChecked }) => {
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <input
                type="checkbox"
                name="cb"
                id="cb"
                checked={isChecked}
                onChange={handleCheckboxChange}
                style={{ display: 'none' }}
            />
            <label htmlFor="cb" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                {isChecked ? (
                    <svg className='w-5 h-5'>
                        <path fill="#0C7D69" d="M16.5 0h-15A1.5 1.5 0 0 0 0 1.5v15A1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 16.5 0Zm-3.22 7.28-5.25 5.25a.748.748 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 0 1 1.06 1.06Z" />
                    </svg>
                ) : (
                    <span
                        style={{
                            display: 'inline-block',
                            width: '18px',
                            height: '18px',
                            border: '1px solid #000',
                            borderRadius: '3px'
                        }}
                    />
                )}
                <span className='ml-4'>I hereby consent to being contacted by the team <span className='text-green-600'>*</span></span>
            </label>
        </div>
    );
};

export default CheckboxWithSVG;
