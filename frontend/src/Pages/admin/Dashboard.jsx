import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  FaAppleAlt,
  FaCarrot,
  FaFish,
  FaBreadSlice,
  FaComment,
} from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import AdminProductCard from "../../Components/admin/AdminProductCard";

const Dashboard = () => {
  const [list, setList] = useState([]);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true); // collapsible

  useEffect(() => {
    const fetchList = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5001/api/product/all-products",
        );
        if (data.success) {
          setList(data.products);
        } else {
          toast.error("Failed to Load Products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Something went wrong while fetching products");
      }
    };

    const fetchComments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5001/api/comment/get-comments",
        );
        if (data.success) {
          setComments(data.comments);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
        toast.error("Something went wrong while fetching comments");
      }
    };

    fetchList();
    fetchComments();
  }, []);

  // Category counts
  const categoryCounts = {
    Fruits: 0,
    Vegetables: 0,
    Meat: 0,
    Dairy: 0,
    Bakery: 0,
  };

  list.forEach((item) => {
    if (categoryCounts[item.category] !== undefined)
      categoryCounts[item.category]++;
  });

  const stats = [
    {
      title: "Fruits",
      count: categoryCounts.Fruits,
      icon: <FaAppleAlt />,
      color: "bg-yellow-300",
    },
    {
      title: "Vegetables",
      count: categoryCounts.Vegetables,
      icon: <FaCarrot />,
      color: "bg-green-400",
    },
    {
      title: "Meat",
      count: categoryCounts.Meat,
      icon: <FaFish />,
      color: "bg-red-500",
    },
    {
      title: "Dairy",
      count: categoryCounts.Dairy,
      icon: <GiMilkCarton />,
      color: "bg-gray-300",
    },
    {
      title: "Bakery",
      count: categoryCounts.Bakery,
      icon: <FaBreadSlice />,
      color: "bg-orange-400",
    },
  ];

  const categoryData = Object.keys(categoryCounts).map((key) => ({
    name: key,
    value: categoryCounts[key],
  }));

  const salesMap = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
  list.forEach((item) => {
    const day = new Date(item.createdAt).toLocaleDateString("en-US", {
      weekday: "short",
    });
    if (salesMap[day] !== undefined) salesMap[day] += 1;
  });

  const salesData = Object.keys(salesMap).map((day) => ({
    name: day,
    sales: salesMap[day],
  }));

  return (
    <div className="p-3 sm:p-6 h-fit w-full bg-gray-50">
      {/* ================= TOP BAR ================= */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Dashboard
        </h2>

        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full bg-white outline-none w-full sm:w-[350px] shadow-sm border border-gray-100"
        />
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="p-3 sm:p-4 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full text-white ${item.color}`}
              >
                <span className="text-[18px]">{item.icon}</span>
              </div>

              <div>
                <h3 className="text-[13px] sm:text-[15px] font-bold">
                  {item.title}
                </h3>

                <p className="text-[22px] sm:text-[28px] font-extrabold text-gray-800 -mt-1">
                  {item.count}
                </p>
              </div>
            </div>

            <p className="text-[11px] text-green-600 mt-2 text-right">
              +12% this week
            </p>
          </div>
        ))}
      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-8">
        {/* CATEGORY CHART */}
        <div className="bg-white border border-gray-100 p-4 sm:p-5 rounded-xl shadow-sm lg:col-span-2">
          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Category Stock
          </h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={categoryData}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#16a34a" barSize={22} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* SALES CHART */}
        <div className="bg-white border border-gray-100 p-4 sm:p-5 rounded-xl shadow-sm lg:col-span-3">
          <h3 className="text-base sm:text-lg font-semibold mb-4">
            Weekly Sales
          </h3>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={salesData}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#16a34a"
                strokeWidth={3}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ================= TABLE SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mb-8">
        {/* RECENT PRODUCTS */}
        <div className="border border-gray-100 bg-white rounded-xl shadow-sm lg:col-span-2">
          <h3 className="text-lg font-semibold p-4 pb-2">Recent Products</h3>

          <div>
            {list.slice(10, 15).map((item, idx) => (
              <AdminProductCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* TOP PRODUCTS */}
        <div className="border border-gray-100 bg-white rounded-xl shadow-sm lg:col-span-2">
          <h3 className="text-lg font-semibold p-4 pb-2">
            Top Selling Products
          </h3>

          <div>
            {list.slice(0, 5).map((item, idx) => (
              <AdminProductCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* COMMENTS */}
        <div className="border border-gray-100 bg-white rounded-xl shadow-sm lg:col-span-3 p-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShowComments(!showComments)}
          >
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FaComment /> User Comments
            </h3>

            <span>{showComments ? "▲" : "▼"}</span>
          </div>

          {showComments && (
            <div className="mt-4 max-h-[400px] overflow-y-auto space-y-3">
              {comments.length === 0 && (
                <p className="text-gray-400 text-sm">No comments yet</p>
              )}

              {comments.map((comment, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <div className="flex justify-between mb-1">
                    <p className="font-semibold text-gray-700 text-sm">
                      {comment.name}
                    </p>

                    <span className="text-xs text-gray-400">
                      {new Date(comment.createdAt).toLocaleString()}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500">{comment.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
