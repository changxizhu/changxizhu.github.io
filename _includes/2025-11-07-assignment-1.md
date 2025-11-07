---
layout: post
title: "CS339: Assignment 1"
tags: [notes]
---


#### def run_swiglu

- In **CS336**, we have the formula, which it actually follows the paper "GLU Variants Improve Transformer" while $V$ is $W_3$.

- Note that $d_{ff}$ is 4* $d_{model}$ (inputs), and SwiGLu suggests $2/3$ to compensate the 3 weighting matrix compared to the original 2 weight matrix.



#### def run_scaled_dot_product_attention

- We need to mask out $False$ as $inf$ values before going into $softmax$
```Python
if mask is not None:
	weights[~mask] = float('-inf')
```

#### def run_multihead_self_attention

- Remember that we need to transpose $heads$ with $sequence$. Here, we are actually processing the whole matrix for sequences $num\_heads$ times, with masking decide the visibility of tokens. This is different from scaled_dot_product_attention, where we are processing "queries, keys, and values" directly.
- Therefore, we need to permute $heads$ and $sequence$
```Python
q_in = torch.einsum("abc,cde -> adbe", in_features, q_proj_weight)
k_in = torch.einsum("abc,cde -> adbe", in_features, k_proj_weight)
v_in = torch.einsum("abc,cde -> adbe", in_features, v_proj_weight)
```



#### def run_rope

- Please note that the rotation matrix is applied according to:
$$out = Rx$$
where $R \in \mathcal{R}^{d*d}$ and $x \in \mathcal{R}^d$, where the second dimension (input dimension) is reduced. So we have:
```Python
torch.einsum("abc,...ac -> ...ab", rotation_matrix, in_query_or_key)
```

rather than
```Python
torch.einsum("abc,...ab -> ...ac", rotation_matrix, in_query_or_key)
```
