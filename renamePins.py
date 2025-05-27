import os

folder_path = "C:/Users/IntoYou/Desktop/CatMemes"


files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]


for index, filename in enumerate(files, start=1):
    new_name = f"pin{index}.jpeg"

    old_path = os.path.join(folder_path, filename)

    new_path = os.path.join(folder_path, new_name)

    os.rename(old_path, new_path)
    print(f"Renamed: {filename} -> {new_name}")
