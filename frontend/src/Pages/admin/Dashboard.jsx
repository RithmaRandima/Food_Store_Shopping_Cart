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
    <div className="p-6 h-fit w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <input
          type="text"
          placeholder="Search..."
          className=" px-4 py-2 rounded-full bg-white outline-none w-[350px] shadow-sm"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative p-2 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-end ">
              <div
                className={`w-9 h-9  flex items-center justify-center rounded-full text-white mb-4 ${item.color}`}
              >
                <span className="text-[19px]">{item.icon}</span>
              </div>
              <div className="ml-2">
                <h3 className="text-[15px] font-bold">{item.title}</h3>
                <p className="text-[28px] font-extrabold -mt-2 text-gray-800">
                  {item.count}
                </p>
              </div>
            </div>

            <p className="text-xs text-green-600 mt-2 text-right">
              +12% this week
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-5 gap-6 mb-8">
        {/* Products Chart */}
        <div className="bg-white border border-slate-200 py-5 col-span-2 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4 ml-3">Category Stock</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={categoryData} barCategoryGap="30%">
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
              />
              <Bar
                dataKey="value"
                fill="#16a34a"
                barSize={25}
                className="bg-amber-200"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* sales Chart */}
        <div className="bg-white border border-slate-200 col-span-3 p-5 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Weekly Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={salesData}
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
            >
              {/* Gradient fill for area under the line */}
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>

              {/* X Axis */}
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={false}
                tickLine={false}
                padding={{ left: 10, right: 10 }}
              />

              {/* Y Axis */}
              <YAxis
                tick={{ fontSize: 12, fill: "#6b7280" }}
                axisLine={false}
                tickLine={false}
                padding={{ top: 10, bottom: 10 }}
              />

              {/* Tooltip */}
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  backgroundColor: "#ffffff",
                  padding: "10px 14px",
                }}
                cursor={{
                  stroke: "#22c55e",
                  strokeWidth: 2,
                  strokeDasharray: "5 5",
                }}
              />

              {/* Main Line */}
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#16a34a"
                strokeWidth={3}
                dot={{
                  r: 4,
                  stroke: "#16a34a",
                  strokeWidth: 2,
                  fill: "#ffffff",
                }}
                activeDot={{
                  r: 6,
                  fill: "#16a34a",
                  stroke: "#ffffff",
                  strokeWidth: 2,
                }}
              />

              {/* Gradient Area */}
              <Line
                type="monotone"
                dataKey="sales"
                stroke="transparent"
                fill="url(#salesGradient)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/*Products details */}
      <div className="grid md:grid-cols-7 gap-3 mb-8">
        {/*Resent Selling Products Table */}
        <div className="border border-slate-200 h-fit col-span-2 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4 p-4 pb-0">
            Recent Products
          </h3>
          <div className="w-full text-left">
            {list.slice(10, 15).map((item, idx) => (
              <AdminProductCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/*Top Selling Products Table */}
        <div className="border border-slate-200 h-fit col-span-2 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4 p-4 pb-0">
            Top Selling Products
          </h3>
          <div className="w-full text-left">
            {list.slice(0, 5).map((item, idx) => (
              <AdminProductCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white border border-slate-200 p-5 col-span-3 rounded-xl shadow-md mb-8 h-[500px]">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowComments(!showComments)}
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaComment /> User Comments
            </h3>
            <span className="text-gray-400">{showComments ? "▲" : "▼"}</span>
          </div>

          {showComments && (
            <div className="mt-4 max-h-100 overflow-y-auto space-y-4 ">
              {comments.length === 0 && (
                <p className="text-gray-400">No comments yet</p>
              )}
              {comments.map((comment, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-gray-50 rounded-lg border border-gray-100 shadow-sm relative"
                >
                  {/* details */}
                  <div className="flex justify-between items-center mb-1">
                    <p>
                      <p className="font-semibold text-gray-700">
                        {comment.name}
                      </p>
                    </p>
                    {/* date */}
                    <span className="text-xs text-gray-400">
                      {new Date(comment.createdAt).toLocaleString()}
                    </span>
                  </div>

                  {/* description */}
                  <p className="text-xs text-gray-500 mt-2">
                    {comment.content}
                  </p>
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
