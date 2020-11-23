import React, { useEffect, useState, useMemo } from "react";

import "../../App.css";
import "../../fontawesome-free/css/all.min.css";
import axios from "axios";

import Search from "./Search";
import Pagination from "./Pagination";
import CommentRow from "./CommentRow";
import useLoader from "../Loader/hook/useLoader";

const CommentTable = () => {
  const [comments, setComments] = useState([]);
  const [loader, showLoader, hideLoader] = useLoader();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const ITEMS_PER_PAGE = 7;

  const getData = () => {
    showLoader();
    axios
      .get("https://gentle-island-41460.herokuapp.com/all_cmt/5")
      .then((res) => {
        hideLoader();
        setComments(res.data);
        console.log(res.data.length);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  const commentsData = useMemo(() => {
    let computedComments = comments;

    if (search) {
      computedComments = computedComments.filter((comment) =>
        comment.content.toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(computedComments.length);

    return computedComments.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [comments, currentPage, search]);

  const callbackHandleChange = (data, index) => {
    const newData = comments;
    newData.map((dataItem) => {
      if (dataItem.id === index) {
        dataItem.effect = data;
      }
    });
    setComments(newData);
    console.log("-------callback change in parent ---", comments);
    return;
  };

  const update = (item) => {
    if (item.id) {
      axios
        .put(`https://gentle-island-41460.herokuapp.com/cmt/${item.id}`, item)
        .then((res) => alert("Cập nhật thành công!"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Pagination
            total={totalItems}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 d-flex">
          <Search
            onSearch={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>
            Bảng tổng hợp comment <span>{loader}</span>
          </h3>
        </div>
        <div className="card-content">
          <table className="table-striped">
            <thead style={{ background: "#e8eaf9" }}>
              <tr>
                <th>Comment</th>
                <th className="text-center">Tích cực</th>
                <th className="text-center">Tiêu cực</th>
                <th className="text-center">Trung lập</th>
                <th className="text-center">Cập nhật</th>
              </tr>
            </thead>
            <tbody>
              {commentsData.map((comment, i) => (
                <CommentRow
                  data={comment}
                  index={comment.id}
                  change={callbackHandleChange}
                  key={comment.id}
                  update={() => update(comment)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommentTable;
