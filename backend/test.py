from markitdown import MarkItDown

md= MarkItDown()

result =md.convert("uploads/sample.pdf")
print(result.text_content)
