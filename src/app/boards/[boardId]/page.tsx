'use client';

import { useParams } from 'next/navigation';

export default function BoardsPage() {
  const params = useParams();
  return (
    <>
      <div>게시글 상세 페이지입니다</div>
      <div>게시글 번호: {params.boardId}</div>
    </>
  );
}
