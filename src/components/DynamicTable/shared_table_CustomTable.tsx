import React, { memo } from 'react';
//import { Pagination } from '../pagination/Pagination';
import { paginationType } from './CustomTableHelper';
import { DynamicComponent, Header, Label, NoDataFound, SequenceNumber } from './CustomTableHelper';
import { Loading } from './CustomTableHelper';
type IDataTableProps = {
  headers: any;
  data?: any;
  footer?: any;
  components?: any;
  isLoading?: boolean;
  loading?: boolean;
  pagination?: paginationType;
  functions?: any;
  status?: any;
  columnName?: any;
  tableType?: any;
  radioButtons?: any;
  searchString?: any;
  customerMobile?: any;
  customerName?: any;
  setValues?: any;
};

const CustomTable: React.FC<IDataTableProps> = (props) => {
  const { data, headers, components, pagination, loading, functions, isLoading } = props;
  const { activeClass, limit, page, totalRecords, totalPages, numbersToshow }: any =
    pagination || {};
  const { changePage, filter } = functions || {};
  const PagiProps = {
    totalPages,
    totalRecords,
    numbersToshow,
    limit,
    activeClass,
    changePage,
    page
  };

  return (
    <div className="flex flex-col bg-gray">
      <div className=" -my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className=" align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
          {props.children && props.children}
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <Header headers={headers} filter={filter && filter} />
              </tr>
            </thead>
            {loading || isLoading || !data ? (
              <tbody>
                <tr>
                  <td
                    className="px-1/2 bg-white justify-center divide-y divide-gray-200"
                    colSpan={headers?.length}
                  >
                    <Loading />
                  </td>
                </tr>
              </tbody>
            ) : (totalRecords === 0 || data.length <= 0) && !(loading || isLoading) ? (
              <tbody>
                <tr>
                  <td className="py-20" colSpan={headers?.length}>
                    <NoDataFound />
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="bg-white">
                {data?.map((row: any, index: any) => {
                  return (
                    <tr
                      className="hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100"
                      key={index}
                    >
                      {headers.map((head: any, number: any) => {
                        if (head.key === 'number') {
                          const SequenceNumberProps = { page, limit, index };
                          return <SequenceNumber key={number} {...SequenceNumberProps} />;
                        } else if (head.component) {
                          const dynamicComponentProps = {
                            number,
                            components,
                            head,
                            row,
                            functions
                          };
                          return <DynamicComponent key={number} {...dynamicComponentProps} />;
                        } else {
                          const LabelProps = { keyy: head.key, row, seperator: head.seperator };
                          return <Label key={number} {...LabelProps} />;
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
          {pagination &&
            {
              /* <Pagination {...PagiProps} /> */
            }}
        </div>
      </div>
    </div>
  );
};

export default memo(CustomTable);
