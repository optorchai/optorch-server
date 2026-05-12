from setuptools import setup, find_packages

setup(
    name="optorch-server",
    version="0.1.0",
    description="FastAPI server extension for OptOrch providing API endpoints for workflow execution and management and backoffice UI",
    long_description=open("README.md").read() if __import__("os").path.exists("README.md") else "",
    long_description_content_type="text/markdown",
    author="Chris Churchill",
    author_email="chris@serva.co.uk",
    license="Proprietary",
    classifiers=[
        "License :: Other/Proprietary License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Programming Language :: Python :: 3.13",
    ],
    url="https://github.com/crismc/optorch-server",
    packages=find_packages(include=["extensions.server", "extensions.server.*"]),
    install_requires=[
        "optorch>=0.1.0",
        "fastapi",
        "uvicorn",
        "openpyxl>=3.1.0",
    ],
    entry_points={
        "console_scripts": [
            "optorch-server=extensions.server.__main__:main",
        ],
    },
    python_requires=">=3.11",
)
