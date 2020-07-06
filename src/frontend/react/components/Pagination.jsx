import React, { useState } from 'react';

const Item = (props) => {
  const { content, icon, active, setActive, items, setItems, pages } = props;
  return (
    <li className={`page-item ${content <= 0 || content > pages ? 'none' : ''}`}>
      <button
        type='button'
        className={`page-link ${active === content ? 'active ' : ''}`}
        disabled={!!(content <= 0 || content > pages)}
        onClick={() => {
          if (content === items[4] && content < pages) setItems(items.map((item) => item + 1));
          if (content === items[0] && content !== 1) setItems(items.map((item) => item - 1));
          setActive(content);
        }}
      >
        {icon && <i className={icon} />}
        {content !== 0 && !icon && <span>{content}</span>}
      </button>
    </li>
  );
};

const Pagination = (props) => {

  const { length, visibleElements, active, setActive } = props;

  const pages = Number.isInteger(length / visibleElements) ?
    length / visibleElements :
    // eslint-disable-next-line radix
    parseInt(length / visibleElements + 1);

  // const [active, setActive] = useState(1);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // console.log('====================================');
  // console.log(length + " " + visibleElements + " " + pages);
  // console.log('====================================');

  // setVisible(active - 1);
  // console.log(setList);
  // setList(list.slice(active - 1, active - 1 + visibleElements));

  return (
    <nav className='navigation center'>
      <ul className={`pagination column-${pages >= 6 ? '7' : `${pages + 2}`}`}>
        <Item
          icon='fas fa-angle-double-left'
          content={active - 1}
          active={active}
          setActive={setActive}
          items={items}
          setItems={setItems}
          pages={pages}
        />
        <Item
          content={items[0]}
          active={active}
          setActive={setActive}
          items={items}
          setItems={setItems}
          pages={pages}
        />
        {pages >= 2 && (
          <Item
            content={items[1]}
            active={active}
            setActive={setActive}
            items={items}
            setItems={setItems}
            pages={pages}
          />
        )}
        {pages >= 3 && (
          <Item
            content={items[2]}
            active={active}
            setActive={setActive}
            items={items}
            setItems={setItems}
            pages={pages}
          />
        )}
        {pages >= 4 && (
          <Item
            content={items[3]}
            active={active}
            setActive={setActive}
            items={items}
            setItems={setItems}
            pages={pages}
          />
        )}
        {pages >= 5 && (
          <Item
            content={items[4]}
            active={active}
            setActive={setActive}
            items={items}
            setItems={setItems}
            pages={pages}
          />
        )}
        <Item
          icon='fas fa-angle-double-right'
          content={active + 1}
          active={active}
          setActive={setActive}
          items={items}
          setItems={setItems}
          pages={pages}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
