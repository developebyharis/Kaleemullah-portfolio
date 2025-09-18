"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none mt-10 prose-a:text-blue-600">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            <img
              {...props}
              className="mb-8 aspect-video w-full max-w-4xl rounded-lg border object-cover"
              alt={props.alt || ""}
            />
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
