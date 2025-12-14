import { HiOutlineUser } from "react-icons/hi";

import SiteHeader from "./SiteHeader";
import DarkModeToggle from "../../ui/DarkModeToggle";
import useUser from "../../features/auth/useUser";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { useNavigate } from "react-router-dom";
import Logout from "../../features/auth/Logout";
import useProjects from "../../features/projects/useProjects";
import { useEffect, useState } from "react";
import Modal from "../../ui/Modal";
import toast from "react-hot-toast";

function Home() {
  // ---
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcome) {
      setIsOpen(true);
      localStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);

  const { isLoading, user } = useUser();
  const { isLoading: isLoadingProjects, projects } = useProjects();
  const navigate = useNavigate();

  const handleNav = () => {
    if (!user) navigate("/auth");

    if (user.status !== 2) {
      toast.error("پروفایل شما در انتظار تایید است");
      return;
    }

    if (user && user.role === "FREELANCER")
      navigate("/freelancer", { replace: true });
    if (user && user.role === "ADMIN")
      navigate("/admin", { replace: true });
    if (user && user.role === "OWNER")
      navigate("/owner", { replace: true });
  };

  return (
    <div className="container mx-auto">
      <Modal
        onClose={() => setIsOpen(false)}
        open={isOpen}
        title={"خوش آمدید"}
      >
        <div className="grid">
          <span>
            اگر با پیغام خطا مواجه شدید و یا در حالت لود گیر کردید
            حتماً از <span className="text-amber-600">vpn </span>
            استفاده کنید
          </span>
          <button
            className="btn btn--primary mt-6  mx-16 mb-1"
            onClick={() => setIsOpen(false)}
          >
            متوجه شدم
          </button>
        </div>
      </Modal>
      <SiteHeader>
        {user && <Logout className="w-7 h-7" />}
        <DarkModeToggle className="h-7 w-7" />
        {isLoading ? (
          <LoadingIndicator mt="translate-y-2" size="small" />
        ) : (
          <>
            <div
              onClick={handleNav}
              className="flex max-sm:hidden border-1 border-secondary/20 px-4 py-3 rounded-xl gap-3 cursor-pointer hover:bg-secondary/10"
            >
              <HiOutlineUser className="w-6 h-6 text-blue" />
              <span className="translate-y-[2px]">
                {user ? user.name : "ورود | ثبت‌نام"}
              </span>
            </div>
            <HiOutlineUser
              className="w-7 h-7 text-secondary sm:hidden"
              onClick={handleNav}
            />
          </>
        )}
      </SiteHeader>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl mt-10 mx-4 bg-card p-10 text-center">
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl max-sm:text-3xl font-extrabold text-secondary mb-4 leading-snug">
            همکاری با بهترین فریلنسرهای ایران 🚀
          </h1>
          <p className="text-secondary-500 max-w-2xl mx-auto mb-8">
            به هزاران فریلنسر در حوزه طراحی، برنامه‌نویسی، محتوا و
            بازاریابی دسترسی پیدا کن. فقط چند کلیک تا انجام پروژه‌ت
            فاصله داری!
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn--primary" onClick={handleNav}>
              شروع کنید
            </button>
          </div>
        </div>

        {/* تصویر پس‌زمینه فریلنسر */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616410.png"
          alt="Freelancer"
          className="absolute -bottom-10 right-0 w-40 opacity-60 max-sm:hidden"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616410.png"
          alt="Freelancer mirror"
          className="absolute -bottom-10 max-sm:-bottom-15 left-5 w-40 opacity-40 rotate-y-180 "
        />
      </section>

      {/* Featured Projects */}
      <section className="mt-20 px-6">
        <h2 className="text-2xl font-bold text-secondary mb-8 text-center">
          جدیدترین پروژه‌ها
        </h2>
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {isLoadingProjects ? (
            <LoadingIndicator mt="translate-y-2" size="small" />
          ) : (
            projects?.map((p, i) => (
              <div
                key={i}
                className="bg-card rounded-3xl p-4 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-card" />
                <div className="relative z-10">
                  <span>📂</span>
                  <h3 className="text-lg font-semibold text-secondary mb-2 text-center">
                    {p.title}
                  </h3>
                  <p className="text-sm text-secondary-400 text-center mb-3">
                    بودجه: {p.budget}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-24 px-6 text-center">
        <h2 className="text-2xl font-bold text-secondary mb-8">
          محبوب‌ترین مهارت‌ها
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React",
            "UI/UX",
            "Photoshop",
            "Flutter",
            "Next.js",
            "SEO",
            "Content Writing",
            "Laravel",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-6 pb-1 pt-2 font-bold bg-chips-gray text-secondary rounded-2xl border border-border cursor-pointer hover:opacity-70 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-[calc(100%-2rem)] mx-auto mt-28 mb-24 px-6 py-16 rounded-3xl bg-card text-center overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            فریلنسر هستید؟
          </h2>
          <p className="text-secondary-500 mb-6">
            همین حالا ثبت‌نام کنید و پروژه‌های مناسب خود را پیدا کنید
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn--primary" onClick={handleNav}>
              شروع کنید
            </button>
          </div>
        </div>

        {/* تصویر پس‌زمینه */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
          alt="Teamwork"
          className="absolute bottom-0 right-10 w-42 opacity-20"
        />
      </section>
    </div>
  );
}

export default Home;
