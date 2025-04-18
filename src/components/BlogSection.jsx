// BlogSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Top 5 Reasons to Get Your Car Detailed Regularly',
    summary: 'Car detailing not only enhances appearance but also protects your investment. Learn why regular detailing is essential.',
    link: '/blog/reasons-to-detail',
  },
  {
    title: 'Mobile Detailing vs. Traditional Car Wash',
    summary: 'Discover the benefits of choosing a professional mobile detailer who comes to your home or office.',
    link: '/blog/mobile-vs-carwash',
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-6 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-10 text-center text-black">From Our Blog</h3>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-2 text-black">{post.title}</h4>
              <p className="text-gray-700 mb-4">{post.summary}</p>
              <Link to={post.link} className="text-[#FFD700] font-medium hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
