import React, { Suspense } from "react";
import { Routes, Navigate, Route, BrowserRouter } from "react-router-dom";

import { Homepage } from "pages/Home";

export function AppRoutes() {
  const Profile = React.lazy(() => import("pages/Profile"));
  const Post = React.lazy(() => import("pages/Post"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="profile" element={<Profile />} />
          <Route path="post" element={<Post />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace={false} />} />
      </Routes>
    </BrowserRouter>
  );
}
