function UserAvatar({ user }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary">
      <img
        className="w-7 h-7 rounded-full object-cover object-center"
        src="/no-user.webp"
        alt="user avatar"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
