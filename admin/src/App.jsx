import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// 1. Import semua komponen dan halaman yang dibutuhkan
import AdminLayout from './Components/AdminLayout'; // Layout utama kita
import Dashboard from './Pages/Dashboard';
import HomeBannerListPage from './Pages/admin/HomeBannerListPage'; // Halaman baru
import AddBannerPage from './Pages/admin/AddBannerPage';   // Halaman baru
import UserListPage from './Pages/admin/UserListPage';
import UserEditPage from './Pages/admin/UserEditPage';
import ProductListPage from './Pages/admin/ProductListPage';
import AddProductPage from './Pages/admin/AddProductPage';
import EditProductPage from './Pages/admin/EditProductPage';
import CategoryListPage from './Pages/admin/CategoryListPage';
import OrderListPage from './Pages/admin/OrderListPage';
import OrderDetailPage from './Pages/admin/OrderDetailPage';
import AddCategoryPage from './Pages/admin/AddCategoryPage';



function App() {

  const router = createBrowserRouter([
    {
      // 2. Definisikan AdminLayout sebagai rute induk untuk semua halaman admin
      path: "/",
      element: <AdminLayout />,
      // 3. Definisikan semua halaman sebagai "children" dari layout.
      // Halaman ini akan di-render di dalam <Outlet />
      children: [
        {
          index: true, // "index: true" berarti ini adalah halaman default untuk path "/"
          element: <Dashboard />,
        },
        {
          path: "/admin/home-slides",
          element: <HomeBannerListPage />,
        },
        {
          path: "/admin/home-slides/add",
          element: <AddBannerPage />,
        },
        {
          path: "/admin/users",
          element: <UserListPage />,
        },
        {
          path: "/admin/user/:id/edit",
          element: <UserEditPage />,
        },
        {
          path: "/admin/products",
          element: <ProductListPage />
        },
        {
          path: "/admin/product/add",
          element: <AddProductPage />
        },
        {
          path: "/admin/product/:id/edit",
          element: <EditProductPage />
        },
        {
          path: "/admin/categories",
          element: <CategoryListPage />
        },
        {
          path: "/admin/orders",
          element: <OrderListPage />
        },
        {
          path: "/admin/order/:id",
          element: <OrderDetailPage />
        },
        {
          path: "/admin/category/add",
          element: <AddCategoryPage />
        }
        // Anda bisa tambahkan route lain di sini, misal untuk Users, Products, dll.
        // {
        //   path: "/admin/users",
        //   element: <UserListPage />,
        // },
      ]
    },
    // Jika Anda punya halaman login terpisah tanpa sidebar/header,
    // Anda bisa menambahkannya di sini sebagai objek route baru.
    // {
    //   path: "/login",
    //   element: <LoginPage />
    // }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;