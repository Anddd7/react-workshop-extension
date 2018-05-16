import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Inputer from '../../components/Inputer';

describe('Inputer', () => {
  it('render one form', () => {
    const wrapper = shallow(<Inputer />);
    expect(wrapper.find('form')).to.have.length(1);
  });

  it('simulates click events', () => {
    const event = {
      preventDefault: () => { },
      target: {
        content: {}
      }
    };

    const handleOk = sinon.spy();
    const wrapper = shallow(<Inputer handleOk={handleOk} />);
    wrapper.find('form').simulate('submit', event);
    expect(handleOk).to.have.property('callCount', 1);
  });
});
