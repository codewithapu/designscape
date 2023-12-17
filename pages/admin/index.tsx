import type { NextPage } from 'next';
import { prisma } from 'utils/prisma';
import { useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import type { Session } from 'next-auth';
import type { Course, Lesson, Video } from '@prisma/client';
import Link from 'next/link';
import CourseGrid from 'components/CourseGrid';
import Button from 'components/Button';
import Heading from 'components/Heading';

type AdminIndexPageProps = {
  session: Session;
  courses: (Course & {
    lessons: (Lesson & {
      video: Video | null;
    })[];
  })[];
};

const AdminIndex: NextPage<AdminIndexPageProps> = ({ courses }) => {
  const { data: session } = useSession();

  if (session?.user?.email === 'codewithapu@gmail.com') {
    return (
      <>
        <Heading>Admin</Heading>
        <Heading as="h2">Your courses</Heading>

        {courses.length > 0 ? (
          <CourseGrid courses={courses} isAdmin />
        ) : (
          <div>
            <Heading as="h3">You don&apos;t have any courses yet.</Heading>
          </div>
        )}

        <Link href="/admin/courses/new">
          <Button>Create a course</Button>
        </Link>
      </>
    );
  }
  return <p>Access Denied</p>;
};

export default AdminIndex;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if (!session || session.user?.email !== 'codewithapu@gmail.com') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const courses = await prisma.course.findMany({
    where: {
      author: {
        id: session.user?.id,
      },
    },
    include: {
      lessons: {
        include: {
          video: true,
        },
      },
    },
  });

  return {
    props: {
      session,
      courses,
    },
  };
};
