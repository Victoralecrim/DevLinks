import React, { useState, useEffect } from "react";

import { auth } from "../services/FirebaseConection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
  const [loading, setLoanding] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function checklogin() {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = {
            uid: user.id,
            email: user.email,
          };

          localStorage.setItem("@detailUser", JSON.stringify(userData));
          setLoanding(false);
          setSigned(true);
        } else {
          setLoanding(false);
          setSigned(false);
        }
      });
    }

    checklogin();
  }, []);

  if (loading) {
    return <div></div>;
  }
  if (!signed) {
    return <Navigate to="/login" />;
  }

  return children;
}
