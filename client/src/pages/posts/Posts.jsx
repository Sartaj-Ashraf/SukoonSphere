import React, { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import { GroupsSidebar, HeaderImg, ProfileSidebar } from '@/components';
import bgImg from '../../assets/images/posts.jpg';
import { posts as initialPosts } from '@/utils/posts';
import { PostModal } from '@/components'; // Assuming PostModal is in the same directory

const Posts = () => {
  const groups = [
    {
      id: 1,
      name: 'Mindfulness Practices 🧘‍♂️',
      image: 'https://example.com/image_mindfulness.jpg',
    },
    {
      id: 2,
      name: 'Coping with Anxiety 💭',
      image: 'https://example.com/image_anxiety.jpg',
    },
    {
      id: 3,
      name: 'Therapy Techniques 📖',
      image: 'https://example.com/image_therapy.jpg',
    },
    {
      id: 4,
      name: 'Depression Support Group ❤️',
      image: 'https://example.com/image_depression.jpg',
    },
    {
      id: 5,
      name: 'Stress Management Workshops 🌱',
      image: 'https://example.com/image_stress.jpg',
    }
  ];


  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : initialPosts;
  });

  const handleAddPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <>
      <HeaderImg currentPage="Posts" bgImg={bgImg} />
      <div className="relative max-w-7xl mx-auto px-4 ">

        <div className='grid grid-cols-12 gap-2'>
          <div className="col-span-3 sticky top-[10%] h-screen overflow-y-auto">
            <GroupsSidebar groups={groups} />
          </div>

          <div className="col-span-6 ">

            {/* Card with Add Post Button */}
            <div className="mb-6 p-6 bg-blue-100 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-semibold mb-4">Share Your Thoughts!</h2>
              <p className="text-gray-700 mb-4">
                Got something on your mind? Share your experiences, tips, and thoughts with the community.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Add Post
              </button>
            </div>

            {/* Render Posts */}
            {posts.map((post) => (
              <div key={post.id} className="mb-6 p-4 border rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={post.avatar}
                    alt={post.username}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h2 className="font-semibold">{post.username}</h2>
                    <p className="text-gray-500 text-sm">
                      {new Date(post.datePublished).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <img
                  src={post.image}
                  alt="Post visual"
                  className="w-full h-[300px] object-contain rounded-lg mb-4"
                />
                <p className="mb-4">{post.description}</p>
                <div className="flex justify-between text-gray-500 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span>{post.views}</span>
                    <AiOutlineLike className="hover:text-blue-500 cursor-pointer mr-1" />
                  </div>
                  <span>{post.readingTime} read</span>
                </div>
                <div className="mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mr-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>

          <div className="col-span-3 sticky top-[10%] h-screen overflow-y-auto">
            <ProfileSidebar
              username="Sartaj Ashraf"
              userTag="Mental Health Advocate"
              questionsPosted={33}
              answersPosted={44}
              savedItems={['Mindfulness Techniques', 'Stress Reduction']}
              recentItems={['Mental Health', 'Mindfulness Practices']}
              groups={['Mindfulness and Meditation', 'Therapy Techniques']}
              followedHashtags={['#mentalhealth', '#mindfulness', '#selfcare']}
              events={['Mental Wellness Workshop', 'Mindfulness Session']}
            />
          </div>

        </div>
      </div>

      {/* Modal */}
      {showModal && <PostModal onClose={setShowModal} onSave={handleAddPost} />}
    </>
  );
};

export default Posts;
