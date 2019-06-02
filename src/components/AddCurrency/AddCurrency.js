import React, { useState } from 'react';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import { Select, Button, Icon } from 'antd';
import './AddCurrency.css';
import { CURRENCY_DATA } from '../../config';

const { Option } = Select;


function AddCurrency({ onCurrencyAdd }) {
    const [selectedCurrency, setSelectedCurrency] = useState();

    const onChange = value => {
        setSelectedCurrency(value)
    }

    const addCurrency = () => {
        onCurrencyAdd(selectedCurrency);
        setSelectedCurrency(undefined);
    }

    return (
        <section className="add-section">
            <div className="submit-group">
                <Select
                    showSearch
                    size="large"
                    style={{ width: 400 }}
                    placeholder="Select a currency"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    value={selectedCurrency}
                    onChange={onChange}
                >
                    {
                        Object.keys(CURRENCY_DATA).map((item) => (
                            <Option key={item} value={item}>
                                {CURRENCY_DATA[item]} ({item})
                        </Option>
                        ))
                    }
                </Select>
                <Button className="submit-button" type="primary" disabled={!selectedCurrency} onClick={() => addCurrency()}>
                    Submit
                </Button>
            </div>
        </section >
    )
}

export default AddCurrency;