# Media Instructions for Mine Sense Gallery

## 📸 Adding Your Photos

### Step 1: Create images folder

In your project root, navigate to `public/` folder:

- If `images/` folder doesn't exist, create it
- Path should be: `d:\minesense\public\images\`

### Step 2: Add your 3 photos

Place your photos in `public/images/`:

- `photo1.jpg` (or your filename)
- `photo2.jpg`
- `photo3.jpg`

### Step 3: Update Gallery.jsx

Open `src/components/Gallery.jsx` and find this section:

```jsx
const defaultItems = [
  {
    id: 1,
    type: 'image',
    src: 'undefined',
    alt: 'Helmet Prototype',
    title: 'Hardware Assembly' },
  ...
];
```

Replace with your image paths:

```jsx
const defaultItems = [
  {
    id: 1,
    type: 'image',
    src: '/images/photo1.jpg',  // Your first photo
    alt: 'Helmet Prototype',
    title: 'Hardware Assembly'
  },
  {
    id: 2,
    type: 'image',
    src: '/images/photo2.jpg',  // Your second photo
    alt: 'Sensor Testing',
    title: 'Sensor Calibration'
  },
  {
    id: 3,
    type: 'image',
    src: '/images/photo3.jpg',  // Your third photo
    alt: 'Dashboard',
    title: 'Supervisor Dashboard'
  },
```

## 🎥 Adding Your Video

### Method 1: Host on External Service (Recommended)

1. Upload video to YouTube or Vimeo
2. Get the embed URL
3. Update Gallery.jsx:

```jsx
{
  id: 4,
  type: 'video',
  src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
  alt: 'Project Demo',
  title: 'Demo Video'
}
```

### Method 2: Local Video File

1. Add video to `public/videos/` folder
2. Update Gallery.jsx:

```jsx
{
  id: 4,
  type: 'video',
  src: '/videos/demo.mp4',
  alt: 'Project Demo',
  title: 'Demo Video',
  thumbnail: '/images/video-thumbnail.jpg'  // Optional
}
```

## 🔄 Hot Reload

After updating files, the React dev server will automatically refresh (thanks to npm start)

## 📝 Image Formats

Recommended formats:

- JPEG for photos
- PNG for screenshots/graphics with transparency
- WebP for better compression

## 🎬 Video Formats

Supported formats:

- MP4 (H.264 codec)
- WebM
- YouTube/Vimeo embeds

## 📦 File Size Tips

To optimize performance:

- Compress images before uploading
- Recommended max: 2-3 MB per image
- Use tools like TinyPNG or ImageOptim

## Example File Structure

```
minesense/
├── public/
│   ├── images/
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── photo3.jpg
│   ├── videos/
│   │   └── demo.mp4
│   └── index.html
├── src/
│   ├── components/
│   │   └── Gallery.jsx  (Update here)
│   ├── App.jsx
│   └── ...
└── package.json
```

---

When ready with your photos and video, send them and update the Gallery.jsx file accordingly!
