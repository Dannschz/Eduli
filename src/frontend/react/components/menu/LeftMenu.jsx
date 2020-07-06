import React, { useState } from 'react';

const Item = (props) => {
  const { tab, setTab, content, icon } = props;
  return (
    <button
      type='button'
      className={`btn ${tab === content ? 'btn-white text-secondary' : 'btn-secondary'}`}
      onClick={() => setTab(content)}
    >
      {content}
      {' '}
      <i className={icon} />
    </button>
  );
};

const ItemCollapse = (props) => {
  const { tab, setTab, content, icon } = props;
  return (
    <button
      type='button'
      className={`btn btn-xs ${tab === content ? 'btn-white text-secondary' : 'btn-secondary'}`}
      onClick={() => setTab(content)}
    >
      <i className={icon} />
    </button>
  );
};

const LeftMenu = (props) => {

  const { item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11 } = props;
  const { tab, setTab } = props;
  const [collapse, setCollapse] = useState(true);

  return (
    <div className={`LeftMenu background-secondary ${collapse ? 'collapse' : ''}`}>
      <div className={`center v-center text-white column-${collapse ? '1' : '2'}`}>
        {!collapse && <h4>Menu</h4>}
        <button type='button' className={`${collapse ? 'btn-secondary' : 'btn-link text-white'} `} onClick={() => setCollapse(!collapse)}>
          <i className={`fas fa-angle-double-${collapse ? 'right' : 'left'}`} />
        </button>
      </div>

      {!collapse && (
        <div>
          {item1 ? <Item content={item1.content} icon={item1.icon} tab={tab} setTab={setTab} /> : <div />}
          {item2 ? <Item content={item2.content} icon={item2.icon} tab={tab} setTab={setTab} /> : <div />}
          {item3 ? <Item content={item3.content} icon={item3.icon} tab={tab} setTab={setTab} /> : <div />}
          {item4 ? <Item content={item4.content} icon={item4.icon} tab={tab} setTab={setTab} /> : <div />}
          {item5 ? <Item content={item5.content} icon={item5.icon} tab={tab} setTab={setTab} /> : <div />}
          {item6 ? <Item content={item6.content} icon={item6.icon} tab={tab} setTab={setTab} /> : <div />}
          {item7 ? <Item content={item7.content} icon={item7.icon} tab={tab} setTab={setTab} /> : <div />}
          {item8 ? <Item content={item8.content} icon={item8.icon} tab={tab} setTab={setTab} /> : <div />}
          {item9 ? <Item content={item9.content} icon={item9.icon} tab={tab} setTab={setTab} /> : <div />}
          {item10 ? <Item content={item10.content} icon={item10.icon} tab={tab} setTab={setTab} /> : <div />}
          {item11 ? <Item content={item11.content} icon={item11.icon} tab={tab} setTab={setTab} /> : <div />}
        </div>
      )}

      {collapse && (
        <div className='LeftMenu--collapse'>
          {item1 ? <ItemCollapse content={item1.content} icon={item1.icon} tab={tab} setTab={setTab} /> : <div />}
          {item2 ? <ItemCollapse content={item2.content} icon={item2.icon} tab={tab} setTab={setTab} /> : <div />}
          {item3 ? <ItemCollapse content={item3.content} icon={item3.icon} tab={tab} setTab={setTab} /> : <div />}
          {item4 ? <ItemCollapse content={item4.content} icon={item4.icon} tab={tab} setTab={setTab} /> : <div />}
          {item5 ? <ItemCollapse content={item5.content} icon={item5.icon} tab={tab} setTab={setTab} /> : <div />}
          {item6 ? <ItemCollapse content={item6.content} icon={item6.icon} tab={tab} setTab={setTab} /> : <div />}
          {item7 ? <ItemCollapse content={item7.content} icon={item7.icon} tab={tab} setTab={setTab} /> : <div />}
          {item8 ? <ItemCollapse content={item8.content} icon={item8.icon} tab={tab} setTab={setTab} /> : <div />}
          {item9 ? <ItemCollapse content={item9.content} icon={item9.icon} tab={tab} setTab={setTab} /> : <div />}
          {item10 ? <ItemCollapse content={item10.content} icon={item10.icon} tab={tab} setTab={setTab} /> : <div />}
          {item11 ? <ItemCollapse content={item11.content} icon={item11.icon} tab={tab} setTab={setTab} /> : <div />}
        </div>
      )}

    </div>
  );
};

export default LeftMenu;
