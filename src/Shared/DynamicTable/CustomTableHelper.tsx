import React, { Fragment, memo, useState, FC } from 'react';
import * as FeatherIcon from 'react-feather';
//import Loader from '../Shared/Loader';

const tdClassName =
  'px-6 py-4 break-all whitespace-no-wrap border-b font-medium border-gray-200 text-sm leading-5 text-gray-700';
const theaderClassName =
  'px-6 py-3 text-left text-md leading-4 font-medium text-gray-900 uppercase tracking-wider';
const inactiveIconClassName =
  'relative left-2 -mt-1 text-black-400 cursor-pointer hover:text-black-500';
const activeIconClassName =
  'relative left-2 -mt-1 text-blue-600 cursor-pointer hover:text-blue-700';

export const getData = (key: string, row: any) => {
  const count = key.split('.').length - 1;
  if (count === 4) {
    const [key1, key2, key3, key4, key5] = key.split('.');
    return row[key1][key2][key3][key4] === null || row[key1][key2][key3][key4] === undefined
      ? '-'
      : row[key1][key2][key3][key4][key5];
  } else if (count === 3) {
    const [key1, key2, key3, key4] = key.split('.');
    return row[key1][key2][key3] === null || row[key1][key2][key3] === undefined
      ? '-'
      : row[key1][key2][key3][key4];
  } else if (count === 2) {
    const [key1, key2, key3] = key.split('.');
    return row[key1][key2] === null || row[key1][key2] === undefined ? '-' : row[key1][key2][key3];
  } else if (count === 1) {
    const [key1, key2] = key.split('.');
    return row[key1] === null || row[key1] === undefined ? '-' : row[key1][key2];
  } else {
    return row[key] === null || row[key] === undefined ? '-' : row[key];
  }
};

type LabelProps = { keyy: string | string[]; row: any; seperator?: string };
type SequenceNumberProps = { page?: number; limit?: number; index: number };
type DynamicComponentProps = {
  head: any;
  components: any;
  functions?: any;
  number: number;
  row: any;
};
type SortIconProps = { keyy: string; filter: any; sorted: boolean };
type HeaderProps = { headers: any; filter?: any; thClassName?: string };
export type paginationType = {
  totalPages: number;
  page: number;
  limit: number;
  activeClass: object;
  numbersToshow?: number;
};
type Actionprops = {
  editProp?: any;
  deleteProp?: any;
  actionProp?: any[];
  onlyAction: boolean;
  Action: boolean;
};
const Label: FC<LabelProps> = (props) => {
  const { keyy, row, seperator } = props;
  let data: string = '';
  if (Array.isArray(keyy)) {
    for (const key of keyy) {
      data = data.concat(getData(key, row) + seperator);
    }
    data = data.slice(0, -2);
  } else {
    data = getData(keyy, row);
  }
  return <td className={tdClassName}>{data}</td>;
};
const SequenceNumber: FC<any> = ({ page, limit, index }) => {
  const pageNo = page ? (page - 1) * limit + (index + 1) + '.' : index + 1;
  return <td className={tdClassName}>{pageNo}</td>;
};
const Loading: FC<any> = () => {
  return <td>{/* <Loader /> */}</td>;
};
const NoDataFound: FC<any> = () => {
  return (
    <td>
      <div
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        No Data Found
      </div>
    </td>
  );
};
const DynamicComponent: FC<DynamicComponentProps> = (props) => {
  const { head, components, functions, number, row } = props;
  const Comp = components[head.component];
  const sort = head.sort ? head.sort : false;
  const CompProps = { data: row, keyy: head.key, sort, ...functions };
  return (
    <Fragment key={number}>
      <Comp {...CompProps} />
    </Fragment>
  );
};
const SortIcon: FC<SortIconProps> = (props) => {
  const [sort, setSort] = useState(false);
  const [iconClass, seticonClass] = useState(inactiveIconClassName);

  const filter = (key: string) => {
    seticonClass(activeIconClassName);
    setSort(!sort);
    props.filter(key, !sort);
  };

  return sort ? (
    <FeatherIcon.ArrowDown onClick={() => filter(props.keyy)} className={iconClass} size="20" />
  ) : (
    <FeatherIcon.ArrowUp onClick={() => filter(props.keyy)} className={iconClass} size="20" />
  );
};
const Header: FC<any> = (props) => {
  return props.headers.map(
    (
      { value, key, sort = false, sorted = false, upperCase = false, thClassName }: any,
      index: number
    ) => {
      const SortIconProp = { keyy: key, sorted, filter: props.filter };
      return (
        <th key={index} className={thClassName ? thClassName : theaderClassName}>
          <div className="flex align-center">
            {upperCase ? value.toUpperCase() : value}
            {sort && props.filter && <SortIcon {...SortIconProp} />}
          </div>
        </th>
      );
    }
  );
};

const WrappedSequenceNumber = memo(SequenceNumber);
const WrappedHeader = memo(Header);
const WrappedLabel = memo(Label);
const WrappedLoading = memo(Loading);
const WrappedNoDataFound = memo(NoDataFound);
const WrappedDynamicComponent = memo(DynamicComponent);

export {
  tdClassName,
  WrappedSequenceNumber as SequenceNumber,
  WrappedHeader as Header,
  WrappedLabel as Label,
  WrappedLoading as Loading,
  WrappedNoDataFound as NoDataFound,
  WrappedDynamicComponent as DynamicComponent
};
